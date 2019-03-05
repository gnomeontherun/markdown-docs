const marked = require('marked');
const fs = require('fs');
const matter = require('gray-matter');
const mkdirp = require('mkdirp');

const pages = fs.readdirSync('./src/docs/components');
const titles = [];
const paths = [];
const imports = [];

pages.forEach(page => {
  const sections = {
    index: null,
    api: null,
    demos: null,
    design: null,
  };
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  titles.push(title);
  paths.push(`{ path: '${page}', component: ${title}Component },`);
  imports.push(`import { ${title}Component } from './${page}';`);
  
  const parts = fs.readdirSync(`./src/docs/components/${page}`);
  parts.forEach(part => {
    const content = fs.readFileSync(`./src/docs/components/${page}/${part}`, { encoding: 'utf8'});
    const details = matter(content);
    sections[part.split('.')[0]] = {
      content,
      details,
      html: marked(details.content)
    };
  });
  console.log(parts);
  console.log(sections);

  let file = `
import { Component } from '@angular/core';

@Component({
  template: \`
  ${sections.index.html}
  
  ${sections.api.html}
  
  ${sections.demos.html}
  
  ${sections.design.html}
  \`
})
export class ${title}Component {}
  `;

  fs.writeFileSync(`./src/app/docs/${page}.ts`, file, { encoding: 'utf8'});
});

let docsModule = `
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

`;

imports.forEach(i => {
  docsModule += `${i}
`;
});

docsModule += `
const routes: Routes = [
`;

paths.forEach(path => {
  docsModule += `  ${path}
`;
})

docsModule += `];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
`;

titles.forEach(title => {
  docsModule += `    ${title}Component,
`;
});

docsModule += `  ],
  exports: [RouterModule]
})
export class DocsModule { }
`;

fs.writeFileSync(`./src/app/docs/docs.module.ts`, docsModule, { encoding: 'utf8'});

const marked = require('marked');
const fs = require('fs');
const matter = require('gray-matter');
const mkdirp = require('mkdirp');

const pages = fs.readdirSync('./src/docs/components');

pages.forEach(page => {
  const sections = {
    index: null,
    api: null,
    demos: null,
    design: null,
  };
  const title = page.charAt(0).toUpperCase() + page.slice(1);
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

  mkdirp.sync(`./src/app/docs/${page}`);

  fs.writeFileSync(`./src/app/docs/${page}.ts`, file, { encoding: 'utf8'});
});


import { Component } from '@angular/core';

@Component({
  template: `
  
  
  
  
  
  
  <h2 id="two-main-types">Two Main Types</h2>
<div class="clr-row">
    <div class="clr-col-12 clr-col-md-6">
        <div class="clrweb-DoxMedia">
            <div class="clrweb-DoxMedia-block">
                <div class="clrweb-DoxMedia-img">
                    <div class="wrapper-thing">
                        <clr-alert clrAlertType="success" [clrAlertClosable]="false">
                            <clr-alert-item>
                                <span class="alert-text">
                                    Your container has been created.
                                </span>
                            </clr-alert-item>
                        </clr-alert>
                        <clr-alert clrAlertType="info" [clrAlertClosable]="false">
                            <clr-alert-item>
                                <span class="alert-text">
                                    You can customize your VM in the Settings Panel.
                                </span>
                            </clr-alert-item>
                        </clr-alert>
                        <clr-alert clrAlertType="warning" [clrAlertClosable]="false">
                            <clr-alert-item>
                                <span class="alert-text">
                                    This feature is still under development.
                                </span>
                            </clr-alert-item>
                        </clr-alert>
                        <clr-alert clrAlertType="danger" [clrAlertClosable]="false">
                            <clr-alert-item>
                                <span class="alert-text">
                                    Your license is about to expire.
                                </span>
                            </clr-alert-item>
                        </clr-alert>
                    </div>
                </div>
            </div>
            <div class="clrweb-DoxMedia-text">
                <h6>Standard Alerts</h6>
                <p>
                    Standard alerts are used in the context of an application <b>either in the content area itself or within components</b>.
                </p>
                <br>
                <p>
                    There are <b>four different sub-types of standard alerts</b> success, info, warning, and error.
                </p>
            </div>
        </div>
    </div>
    <div class="clr-col-12 clr-col-md-6">
        <div class="clrweb-DoxMedia">
            <div class="clrweb-DoxMedia-block">
                <div class="clrweb-DoxMedia-img app-alert-box">
                    <clr-alert clrAlertType="info" [clrAlertAppLevel]="true"
                        [clrAlertClosable]="false">
                        <clr-alert-item>
                            <span class="alert-text">
                                You can customize your VM in the Settings Panel.
                            </span>
                        </clr-alert-item>
                    </clr-alert>
                    <clr-alert clrAlertType="warning" [clrAlertAppLevel]="true"
                        [clrAlertClosable]="false">
                        <clr-alert-item>
                            <span class="alert-text">
                                This feature is still under development.
                            </span>
                        </clr-alert-item>
                    </clr-alert>
                    <clr-alert clrAlertType="danger" [clrAlertAppLevel]="true"
                        [clrAlertClosable]="false">
                        <clr-alert-item>
                            <span class="alert-text">
                                Your license is about to expire.
                            </span>
                        </clr-alert-item>
                    </clr-alert>
                    <!-- This is a silly hack to keep the height of the boxes nearly equal in most cases but
                    we don't really support success app level so this must go. -->
                    <clr-alert clrAlertType="success" [clrAlertAppLevel]="true"
                        [clrAlertClosable]="false" style="visibility: hidden">
                        <clr-alert-item>
                            <span class="alert-text">
                                Your container has been created.
                            </span>
                        </clr-alert-item>
                    </clr-alert>
                </div>
            </div>
            <div class="clrweb-DoxMedia-text">
                <h6>App-Level Alerts</h6>
                <p>
                    App-level alerts are used in the <b>global context of an application</b>. They are placed at the very top of all content and navigation.
                </p>
                <p>
                    There are <b>three different sub-types of app-level alerts</b> info, warning, and error.
                </p>
            </div>
        </div>
    </div>
</div>

<p>==============================</p>
<h1 id="demo">DEMO</h1>
<p>Your container has been created.
You can customize your VM in the Settings Panel.
This feature is still under development.</p>
<h1 id="your-license-is-about-to-expire">Your license is about to expire.</h1>
<h4 id="standard-alerts">Standard Alerts</h4>
<p>Standard alerts are used in the context of an application <strong>either in the content area itself or within components</strong>.</p>
<p>There are <strong>four different sub-types of standard alerts</strong>: success, info, warning, and error.</p>
<p>==============================</p>
<h1 id="demo-1">DEMO</h1>
<p>You can customize your VM in the Settings Panel.
This feature is still under development.</p>
<h1 id="your-license-is-about-to-expire-1">Your license is about to expire.</h1>
<h4 id="app-level-alerts">App-Level Alerts</h4>
<p>App-level alerts are used in the <strong>global context of an application</strong>. They are placed at the very top of all content and navigation.</p>
<p>There are <strong>three different sub-types of app-level alerts</strong>: info, warning, and error.</p>
<h2 id="standard-alerts-1">Standard Alerts</h2>
<p>Four different sub-types
There are four different sub-types of standard alerts: error, warning, info, and success.</p>
<p>Error
Acknowledge
Error
Reserved for errors, malfunctions, as well as critical issues like license expiration.</p>
<p>Warning
Acknowledge
Warning
Reserved for warnings: a message that needs the user attention and aknowledgment but might not cause errors.</p>
<p>Info
Acknowledge
Info
Provides info to users in context. Shouldn’t be overused to replace regular content.</p>
<p>Success
Acknowledge
Success
Reserved to provide to a static persistent success message.</p>
<p>Order in context
Standard alerts convey different levels of severity and urgency. They’re ordered by the urgency in which the user needs to pay attention to: error, warning, info, then success.</p>
<p>In the case there are multiple of each sub-type, all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.</p>
<p>Style
The consistency in the style of the standard alerts allows users to quickly identify them, pay attention to them, and acknowledge them.</p>
<p>Typography
Depending on the sub-type of a standard alert, make sure to communicate a clear, concise, and actionable message.</p>
<p>Size
There are two sizes of standard alerts: default and compact. Use the compact alert only in places where vertical space is scarce and information density is needed. Cards provide a good example here.</p>
<p>Info
Acknowledge
Compact Info
Placement
Standard alerts could be placed in multiple different contexts including inside of components.</p>
<p>Modals</p>
<p>Deleting File
The file “mockups.sketch” is currently open and cannot be deleted.
Are you sure you want to delete the file “mockups.sketch”?</p>
<p>KEEP FILE
DELETE
Alerts could appear within modals. It is recommended that no more than one alert appear within a modal. Their function should not be to validate, validation should be done inline and closer to the error itself.</p>
<p>Cards
It is recommended to use concise language as you share an alert within a card. It is also recommended to use a compact-size alert. The focus of the alert should be on its content not on the alert appearing in it.</p>
<p>It is also recommended to have an alert at the very top of a card, on top of its title. An alert is meant to attract the attention of the user.</p>
<p>Using more than one alert within a card distracts the user and dilutes the importance of the alerts displayed.</p>
<p>Data might be outdated. Last update: 16 hours ago.
Memory
10.05 GB free</p>
<p>1.94 GB used | 11.99 GB total
SEE ALL STATISTICS
App-Level Alerts
Three different subtypes
There are three sub-types of app-level alerts: error, warning, and info.</p>
<p>Why no success app-level alert?</p>
<p>App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message.</p>
<p>Order in context
App-level alerts follow the same urgency order as standard alerts: error, warning, and info.</p>
<p>Placement
App-level alerts are placed at the very top of the global context. They should not be placed in any other configuration. Their purpose is to provide global alerts available and relating to the full context of the overall application.</p>
<p>App-level alerts appear at the very top of your application</p>

  `
})
export class AlertsComponent {}
  
## Two Main Types

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

==============================
DEMO
==============================
Your container has been created.
You can customize your VM in the Settings Panel.
This feature is still under development.
Your license is about to expire.
==============================

#### Standard Alerts

Standard alerts are used in the context of an application **either in the content area itself or within components**.

There are **four different sub-types of standard alerts**: success, info, warning, and error.

==============================
DEMO
==============================
You can customize your VM in the Settings Panel.
This feature is still under development.
Your license is about to expire.
==============================

#### App-Level Alerts

App-level alerts are used in the **global context of an application**. They are placed at the very top of all content and navigation.

There are **three different sub-types of app-level alerts**: info, warning, and error.

## Standard Alerts

Four different sub-types
There are four different sub-types of standard alerts: error, warning, info, and success.

Error
Acknowledge
Error
Reserved for errors, malfunctions, as well as critical issues like license expiration.

Warning
Acknowledge
Warning
Reserved for warnings: a message that needs the user attention and aknowledgment but might not cause errors.

Info
Acknowledge
Info
Provides info to users in context. Shouldn’t be overused to replace regular content.

Success
Acknowledge
Success
Reserved to provide to a static persistent success message.

Order in context
Standard alerts convey different levels of severity and urgency. They’re ordered by the urgency in which the user needs to pay attention to: error, warning, info, then success.

In the case there are multiple of each sub-type, all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.

Style
The consistency in the style of the standard alerts allows users to quickly identify them, pay attention to them, and acknowledge them.

Typography
Depending on the sub-type of a standard alert, make sure to communicate a clear, concise, and actionable message.

Size
There are two sizes of standard alerts: default and compact. Use the compact alert only in places where vertical space is scarce and information density is needed. Cards provide a good example here.

Info
Acknowledge
Compact Info
Placement
Standard alerts could be placed in multiple different contexts including inside of components.

Modals

Deleting File
The file “mockups.sketch” is currently open and cannot be deleted.
Are you sure you want to delete the file “mockups.sketch”?

KEEP FILE
DELETE
Alerts could appear within modals. It is recommended that no more than one alert appear within a modal. Their function should not be to validate, validation should be done inline and closer to the error itself.

Cards
It is recommended to use concise language as you share an alert within a card. It is also recommended to use a compact-size alert. The focus of the alert should be on its content not on the alert appearing in it.

It is also recommended to have an alert at the very top of a card, on top of its title. An alert is meant to attract the attention of the user.

Using more than one alert within a card distracts the user and dilutes the importance of the alerts displayed.

Data might be outdated. Last update: 16 hours ago.
Memory
10.05 GB free

1.94 GB used | 11.99 GB total
SEE ALL STATISTICS
App-Level Alerts
Three different subtypes
There are three sub-types of app-level alerts: error, warning, and info.

Why no success app-level alert?

App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message.

Order in context
App-level alerts follow the same urgency order as standard alerts: error, warning, and info.

Placement
App-level alerts are placed at the very top of the global context. They should not be placed in any other configuration. Their purpose is to provide global alerts available and relating to the full context of the overall application.

App-level alerts appear at the very top of your application

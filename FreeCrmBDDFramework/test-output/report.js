$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium Projects/FreeCrmBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contacts Feature",
  "description": "",
  "id": "free-crm-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": ": Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user mouse click on contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify contact is saved or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ],
      "line": 20,
      "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "Shubham",
        "Bhandari"
      ],
      "line": 21,
      "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "Om",
        "Bhandari"
      ],
      "line": 22,
      "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10161933000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is already on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user press on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_homepage()"
});
formatter.result({
  "duration": 2140908900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_loginpage_cogmentocrm()"
});
formatter.result({
  "duration": 8590100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.enter_username_and_password()"
});
formatter.result({
  "duration": 235883700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_press_on_login()"
});
formatter.result({
  "duration": 3066871900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 4993300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ": Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user mouse click on contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters \"Shubham\" and \"Bhandari\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify contact is saved or not",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_mouse_click_on_contact()"
});
formatter.result({
  "duration": 10203547700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_contact_link()"
});
formatter.result({
  "duration": 10272836600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shubham",
      "offset": 13
    },
    {
      "val": "Bhandari",
      "offset": 27
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 909732800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.verify_contact_is_saved_or_not()"
});
formatter.result({
  "duration": 3095994500,
  "status": "passed"
});
formatter.before({
  "duration": 9869903500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is already on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user press on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_homepage()"
});
formatter.result({
  "duration": 2006694200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_loginpage_cogmentocrm()"
});
formatter.result({
  "duration": 6057100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.enter_username_and_password()"
});
formatter.result({
  "duration": 231583300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_press_on_login()"
});
formatter.result({
  "duration": 3072008700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 5397600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user mouse click on contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters \"Om\" and \"Bhandari\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify contact is saved or not",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_mouse_click_on_contact()"
});
formatter.result({
  "duration": 10164156000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_contact_link()"
});
formatter.result({
  "duration": 10288575400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Om",
      "offset": 13
    },
    {
      "val": "Bhandari",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "duration": 728198600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.verify_contact_is_saved_or_not()"
});
formatter.result({
  "duration": 3099844300,
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            formatter.before({
  "duration": 13098541400,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHUBHAM\u0027, ip: \u0027192.168.2.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x003FD383+3134339]\n\tOrdinal0 [0x002EA171+2007409]\n\tOrdinal0 [0x0018AD90+568720]\n\tOrdinal0 [0x00181364+529252]\n\tOrdinal0 [0x001819FC+530940]\n\tOrdinal0 [0x00182C15+535573]\n\tOrdinal0 [0x0017DFC5+516037]\n\tOrdinal0 [0x0018BF70+573296]\n\tOrdinal0 [0x00131916+203030]\n\tOrdinal0 [0x00130C1D+199709]\n\tOrdinal0 [0x0012EB0B+191243]\n\tOrdinal0 [0x00112E77+77431]\n\tOrdinal0 [0x00113E3E+81470]\n\tOrdinal0 [0x00113DC9+81353]\n\tOrdinal0 [0x00300CD9+2100441]\n\tGetHandleVerifier [0x0056B75A+1396954]\n\tGetHandleVerifier [0x0056B3D9+1396057]\n\tGetHandleVerifier [0x00577126+1444518]\n\tGetHandleVerifier [0x0056BCE8+1398376]\n\tOrdinal0 [0x002F7F51+2064209]\n\tOrdinal0 [0x003022EB+2106091]\n\tOrdinal0 [0x00302411+2106385]\n\tOrdinal0 [0x003149C4+2181572]\n\tBaseThreadInitThunk [0x75626359+25]\n\tRtlGetAppContainerNamedObjectPath [0x773C7C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x773C7BF4+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinations.HookStepDefination.launchBrowser(HookStepDefination.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is already on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user press on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.title_of_loginpage_cogmentocrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.enter_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_press_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": ": Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-contacts-feature;:-free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user mouse click on contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters \"Om\" and \"Bhandari\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify contact is saved or not",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_mouse_click_on_contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_new_contact_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Om",
      "offset": 13
    },
    {
      "val": "Bhandari",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.verify_contact_is_saved_or_not()"
});
formatter.result({
  "status": "skipped"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkoutpod.feature");
formatter.feature({
  "line": 2,
  "name": "Select Cars",
  "description": "",
  "id": "select-cars",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14277681800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Select Cars",
  "description": "",
  "id": "select-cars;select-cars",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on page \"https://checkout.pod-point.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select make as \"Mitsubishi\" and model as \"Outlander\" in the Select Your Car fields",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check the checkbox \"I am NOT eligible to claim the dealership discount\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the \"Universal Socket\" option under Select your connection type",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I check the prices for the \"7kw\" unit displayed under Select your power rating match Full Price – \"£879.00\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I check the prices for the \"7kw\" unit displayed under Select your power rating match With OLEV Grant - \"£529.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I check that \"6\" compatible extras are shown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select a random compatible extra",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I ensure that the total price at the bottom right of the screen correctly matches the \"7kw\" unit price plus the compatible extra price",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://checkout.pod-point.com/",
      "offset": 14
    }
  ],
  "location": "CheckoutPodPointStepDefination.iAmOnPage(String)"
});
formatter.result({
  "duration": 4688769200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 18
    },
    {
      "val": "Outlander",
      "offset": 44
    }
  ],
  "location": "CheckoutPodPointStepDefination.iSelectMakeAsAndModelAsInTheSelectYourCarFields(String,String)"
});
formatter.result({
  "duration": 459353900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I am NOT eligible to claim the dealership discount",
      "offset": 22
    }
  ],
  "location": "CheckoutPodPointStepDefination.i_check_the_box(String)"
});
formatter.result({
  "duration": 5061011800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Universal Socket",
      "offset": 14
    }
  ],
  "location": "CheckoutPodPointStepDefination.i_select_the_option_under_Select_your_connection_type(String)"
});
formatter.result({
  "duration": 10085261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7kw",
      "offset": 28
    },
    {
      "val": "£879.00",
      "offset": 99
    }
  ],
  "location": "CheckoutPodPointStepDefination.i_check_the_prices_for_the_unit_displayed_under_Select_your_power_rating_match_Full_Price(String,String)"
});
formatter.result({
  "duration": 2267879400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7kw",
      "offset": 28
    },
    {
      "val": "£529.00",
      "offset": 104
    }
  ],
  "location": "CheckoutPodPointStepDefination.iCheckThePricesForTheUnitDisplayedUnderSelectYourPowerRatingMatchWithOLEVGrant(String,String)"
});
formatter.result({
  "duration": 28703600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 14
    }
  ],
  "location": "CheckoutPodPointStepDefination.i_check_that_compatible_extras_are_shown(String)"
});
formatter.result({
  "duration": 5480033100,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutPodPointStepDefination.i_select_a_random_compatible_extra()"
});
formatter.result({
  "duration": 120199000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7kw",
      "offset": 87
    }
  ],
  "location": "CheckoutPodPointStepDefination.i_ensure_that_the_total_price_at_the_bottom_right_of_the_screen_correctly_matches_the_unit_price_plus_the_compatible_extra_price(String)"
});
formatter.result({
  "duration": 57500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1316163400,
  "status": "passed"
});
});
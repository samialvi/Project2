
// "Create Account" Button
document.getElementById("create-account").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior
    alert("Account creation logic goes here!"); // Placeholder action
});
// Google Redirecting
function redirectToGoogleAccountsPage() {
            window.location.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?locale=en_US&client_id=510718330363-s8203tpcr3unvq2n580hoke0590m6rd8.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Fsignin.ebay.com%2Fsignin%2Fggl%2Fcb&state=dl4xLjEjaV4xI3BeMSNJXjMjZl4wI3JeMSN0XlVsNDFYelU2T0RjM05rRTVRVEZFUVRsRFF6SXhNVFU0TTBVek5FTkNRVVUzTmtGRk56ZGZNbDh4STBWZU1qWXc%3D%7C%7CAQAKAAAAMLETdXiL6sOaR63NGSmvNKyE4IlEJCS5x1OWL0L4Z0yFvrx6i5q7yko_634meroodw&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow";
        }
// Facebook Redirecting
function redirectToFacebookAccountsPage() {
            window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=159693524730858&kid_directed_site=0&app_id=159693524730858&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Flocale%3Den_US%26client_id%3D159693524730858%26scope%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fsignin.ebay.com%252Fsignin%252Ffb%252Fcb%26state%3Ddl4xLjEjaV4xI2ZeMCNwXjEjcl4xI0leMyN0XlVsNDFYems2T0VaQ1JVWXdSRE0xTWtVMlFVWTFORVZDT1VRM1JUYzBOa000UXpRMU5qQmZNbDh4STBWZU1qWXc%253D%257C%257CAQAKAAAAMLETdXiL6sOaR63NGSmvNKyE4IlEJCS5x1OWL0L4Z0yFvrx6i5q7yko_634meroodw%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D8a213119-bc8e-41b4-b108-333539bd9f2c%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fsignin.ebay.com%2Fsignin%2Ffb%2Fcb%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Ddl4xLjEjaV4xI2ZeMCNwXjEjcl4xI0leMyN0XlVsNDFYems2T0VaQ1JVWXdSRE0xTWtVMlFVWTFORVZDT1VRM1JUYzBOa000UXpRMU5qQmZNbDh4STBWZU1qWXc%253D%257C%257CAQAKAAAAMLETdXiL6sOaR63NGSmvNKyE4IlEJCS5x1OWL0L4Z0yFvrx6i5q7yko_634meroodw%23_%3D_&display=page&locale=en_US&pl_dbl=0";
        }
// Apple Redirecting
function redirectToAppleAccountsPage() {
            window.location.href = "https://signin.ebay.com/signin/apple?ru=https%3A%2F%2Fwww.ebay.com%2F&scl_source=screg";
        }

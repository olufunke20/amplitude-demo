document.getElementById("signupBtn").addEventListener("click", () => {
    alert("Sign Up Clicked");
    // Send event to Amplitude
    amplitude.track('CTA Clicked', { 'Button Type': 'Sign Up' });
});

document.getElementById("demoBtn").addEventListener("click", () => {
    alert("Request Demo Clicked");
    // Send event to Amplitude
    amplitude.track('CTA Clicked', { 'Button Type': 'Request Demo' });
});
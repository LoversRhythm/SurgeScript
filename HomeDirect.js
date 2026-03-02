/**
 * Surge Event Script: Auto Switch Outbound Mode based on SSID
 * Event: network-changed
 */

// 1. Define your Home SSID
const HOME_SSID = "@MAINCHU_SS_5G"; 

// 2. Get current network information from Surge's built-in variable
const currentSSID = $network.wifi.ssid;

// 3. Logic: If at home, set to Direct; otherwise, set to Rule mode
if (currentSSID === HOME_SSID) {
    $surge.setOutboundMode("direct");
} else {
    $surge.setOutboundMode("rule");
}

// 4. Signal script completion
$done();

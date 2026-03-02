const HOME_SSID = "@MAINCHU_SS_5G";const currentSSID = $network.wifi.ssid;if (currentSSID === HOME_SSID) {$surge.setOutboundMode("direct");}else{$surge.setOutboundMode("rule");}$done();

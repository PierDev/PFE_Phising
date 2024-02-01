$IPAddress = (Get-NetIPAddress -AddressFamily IPv4  -InterfaceAlias "Wi-Fi", "Wi-Fi 3").IPAddress
$Response = Invoke-WebRequest -URI http://localhost:8000/ping -Body @{ip=$IPAddress}
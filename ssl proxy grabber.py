from requests_html import HTMLSession
from colorama import *
import requests, json, replit

session = HTMLSession()
r = session.get('https://www.sslproxies.org/')

proxies = list(zip(r.html.xpath('//*[@id="proxylisttable"]/tbody/tr/td[1]/text()'),r.html.xpath('//*[@id="proxylisttable"]/tbody/tr/td[2]/text()'))) 

i = 1

print("The script is ready to run!")
input("Press Enter to grab proxies!")
replit.clear()

for proxy in proxies:
  r = requests.get('https://extreme-ip-lookup.com/json/' + proxy[0])
  proxy_data = r.json()
  proxy_location = proxy_data["country"]

  print(f"[{i}] Gathered Proxy: " + Fore.RED + proxy[0] + Fore.RESET + ":" + proxy[1] + Fore.RESET + " (" + proxy_location + ")")
  i = i + 1

print("")
print("No more proxies can be found! Please run this script again later!")
input("Press Enter to stop the script!")

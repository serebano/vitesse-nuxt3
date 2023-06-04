export default eventHandler(async (e) => {

    const {url} = await readBody(e)

    const r = await $fetch("https://tikwm.com/api/", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9,ro-MD;q=0.8,ro;q=0.7,ru-MD;q=0.6,ru;q=0.5",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "_ga=GA1.1.668647721.1679779211; _gcl_au=1.1.540126170.1679779211; current_language=en; __gads=ID=7019728430632078-223377a870dd0059:T=1679779211:RT=1685557238:S=ALNI_MZtl0MYcc8wxLasVrEUEAkt38ehoA; __gpi=UID=00000bcc7f2243d6:T=1679779211:RT=1685557238:S=ALNI_MZduTL8ii0T3q15hUVrvSyvyybNOw; _ga_5370HT04Z3=GS1.1.1685557237.5.1.1685557523.0.0.0",
    "Referer": "https://tikwm.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": {
    url
  },
  "method": "POST"
});

    return {
      data: r,
    }
  })
  
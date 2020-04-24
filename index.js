const puppeteer = require("puppeteer");
// function delay(time) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, time);
//   });
// }

async function clickLoop(page) {
  await page.waitFor(2000);
  for (let i = 0; i < 1000; i++) {
    await page.click(".fa-arrow-right");
    await page.waitFor(4000);
    i++;
  }
}

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://localhost:5777");
    const width = 1024;
    const height = 1000;
    await page.setViewport({ width: width, height: height });

    console.log(page.url());
    if (page.url() === "http://localhost:5777/#/auth") {
      await page.type("input[type=text]", "tech3");
      await page.type("input[type=password]", "tech3");
      await page.waitFor(2000);
      await page.click(".btn");
      await page.waitFor(2000);
      await page.click(".card-img-top");
      await page.waitFor(2000);
      await page.click(".v-lazy-image");
      await page.waitFor(4000);
      // await page.waitForNavigation();
      //http://localhost:5777/#/annotate/27718

      await page.goto("http://localhost:5777/#/annotate/27718");

      for (let i = 0; i < 1000; i++) {
        await page.keyboard.press("n");
        console.log(page.url());
        await page.waitFor(4000);
        i++;
      }
      await page.close();
      await browser.close();
    }
  } catch (err) {
    console.log(err);
  }
})();
// await page.$eval("input[type=text]", (el) => (el.value = "tech3"));
// await page.$eval("input[type=password]", (el) => (el.value = "tech3"));

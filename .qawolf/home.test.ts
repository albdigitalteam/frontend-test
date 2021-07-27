import { Browser, BrowserContext } from "playwright";
import qawolf from "qawolf";

let browser: Browser;
let context: BrowserContext;

beforeAll(async () => {
  browser = await qawolf.launch({
    slowMo: 1000,
  });
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("Blog page", async () => {
  const page = await context.newPage();
  // Access page
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  // See comments
  await page.click('[aria-label="message"]');
  // Fill in input
  await page.click(".ant-input");
  await page.fill(".ant-input", "Insert comment here");
  // Adding comment
  await page.click(".ant-btn");
  // Delete post
  await page.click("text=Delete");
  // Confirm delete
  await page.click("text=OK");
});

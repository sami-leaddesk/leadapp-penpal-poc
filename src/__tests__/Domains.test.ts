import { Domains } from "..";

describe("Domains", () => {
  test("defaults match leaddesk domains", () => {
    expect("https://login.leaddesk.com").toMatch(Domains.default);
    expect("http://login.leaddesk.com").toMatch(Domains.default);
    expect("https://login-1.leaddesk.com").toMatch(Domains.default);
  });
});

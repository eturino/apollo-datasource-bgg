import { ApolloDatasourceBGG } from "..";

const cache = {
  delete: (_key: string): Promise<boolean | void> => Promise.resolve(true),
  get: (key: string): Promise<string> => Promise.resolve(key),
  set: (
    _key: string,
    _value: string,
    _options?: { ttl?: number }
  ): Promise<void> => Promise.resolve()
};

describe("ApolloDatasourceBGG", () => {
  it("class exists", () => {
    const ds = new ApolloDatasourceBGG();
    expect(ds).toBeInstanceOf(ApolloDatasourceBGG);
  });

  it("can be initialised with a context", () => {
    const context = { something: 1 };
    const ds = new ApolloDatasourceBGG<typeof context>();
    ds.initialize({ context, cache });
    expect(ds);
  });
});

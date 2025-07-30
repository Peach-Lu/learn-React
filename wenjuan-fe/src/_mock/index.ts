import Mock from "mockjs";

Mock.mock("/api/test", "get", () => {
  return {
    erron: 0,
    data: {
      name: `双越老师 ${Date.now()}`,
    },
  };
});

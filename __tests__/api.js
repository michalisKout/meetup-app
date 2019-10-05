const axios = {
  get: jest.fn(() => Promise.resolve({ data: { name: 'test' } })),
};

describe('axios', () => {
  it('should get data', async () => {
    const data = await axios.get();

    expect(data).toBeDefined();
  });
});

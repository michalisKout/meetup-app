// import sinon, { before, after } from 'sinon';
// import { getAllUnRegisteredEvents, getEventsByDate } from '../src/app/api/events';

const axios = {
  get: jest.fn(() => Promise.resolve({ data: { name: 'test' } })),
};

describe('axios', () => {
  it('should get data', async () => {
    const data = await axios.get();

    expect(data).toBeDefined();
  });
});

// WORKAROUND TO TRIGGER USEEFFECT HOOK
// const Comp = () => {
//   useEffect(() => console.log('effect'));
//   return null;
// }

// const tree = renderer.create(<Comp />); // nothing logged
// tree.update(); // console.log => 'effect'

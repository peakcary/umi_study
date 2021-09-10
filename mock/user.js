export default {
  '/user/getUserDetail': (req, res) => {
    setTimeout(() => {
      res.send({
        status: 200,
        message: 'success',
        data: {
          name: '麦乐',
          age: '1',
          country: 'cn',
        },
      });
    }, 500);
  },
};

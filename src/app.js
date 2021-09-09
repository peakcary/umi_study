export async function getInitialState() {
  const data = {
    userId: '1',
    role: 'admin',
    name: '清风',
    avatar:
      'https://tva1.sinaimg.cn/large/008i3skNgy1gtf88u0fsrj61c00u0dh902.jpg',
  };
  return data;
}

export const layout = {
  logout: () => {
    console.log('1234');
  },
};

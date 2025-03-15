function AuthLayout({ children }) {
  return (
    <div className='bg-surface-a0'>
      <div>{children}</div>         {/*default page code, without permission use defaultlayout*/}
    </div>
  );
}

export default AuthLayout;

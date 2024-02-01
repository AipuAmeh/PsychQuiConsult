const styles = {
  loginForm: {
    backgroundColor:  "#C49A6C"
  },
  buttons: {
    backgroundColor: "#FFEED3"
  }
}


const LoginForm = () => {
    return (
        <div className="w-full max-w-lg mx-auto">
  <form className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 flex flex-col place-content-center mt-8 rounded" style={styles.loginForm}>
    <div className="mb-4">
      <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
      </input>
    </div>
    <div className="mb-6">
      <label className="block text-black-900 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
      </input>
          <label className="block text-black-900 text-sm font-bold mb-2" htmlFor="password">
        Confirm Password
      </label>
      <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      </input>
    </div>
    <div className="flex items-center justify-between flex-col space-y-4">
      <button className="mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      style={styles.buttons} type="button">
        Provider Login
      </button>
      <button className=" mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      style={styles.buttons} type="button">
        Patient Login
      </button>
    </div>
  </form>
</div>
    )
};



export default LoginForm ;
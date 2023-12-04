export const Register = () => {
  return (
    <form>
      <label>
        <p>username:</p>
        <input type="username" />
      </label>
      <label>
        <p>email:</p>
        <input type="email" />
      </label>
      <label>
        <p>password:</p>
        <input type="password" />
      </label>

      <button>Submit</button>
    </form>
  );
};

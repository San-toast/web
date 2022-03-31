import React from "react";

export default function UserData({ userData }) {
  return (
    <div>
      <h1>User Data Entered</h1>
      <form action="">
        <div className="formData">
          {userData.map((user) => {
            if (user.name === "") {
              return null;
            } else {
              return (
                <>
                  <input type="text" disabled value={user.name} />
                  <input type="text" disabled value={user.lastName} />
                  <input type="text" disabled value={user.phone} />
                  <input type="text" disabled value={user.email} />
                  <input type="text" disabled value={user.message} />
                  <input type="text" disabled value={user.drop} />
                </>
              );
            }
          })}
        </div>
      </form>
    </div>
  );
}

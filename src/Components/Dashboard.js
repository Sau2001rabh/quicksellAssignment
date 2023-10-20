import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { ElementIcon } from "./ElementIcon";
import "./Dashboard.css";

const Dashboard = () => {
  // Select data from the Redux store
  const { tickets, dataSelected, user, users } = useSelector(
    (state) => state.dataSlice
  );

  return (
    <div className="dashboard">
      <div className="container">
        {dataSelected?.map((item, index) => {
          return (
            <>
              <div key={index} className="dashboard-container">
                <div className="flex-sb">
                  <div>
                    {!user ? (
                      <ElementIcon element={item[index]?.title} />
                    ) : (
                      <>
                        <div className="dashboard-img">
                          <img
                            src={`https://ui-avatars.com/api/?name=${item[
                              index
                            ]?.title
                              .split(" ")
                              .map((n) => n[0].toUpperCase())
                              .join(
                                ""
                              )}&size=100&background=random&color=fff&rounded=true&font-size=0.7`}
                            alt="User"
                          />
                        </div>
                      </>
                    )}
                    <span style={{ fontWeight: "600" }}>
                      {" "}
                      {item[index]?.title} - {item[index]?.value?.length}
                    </span>
                  </div>
                  <div>
                    <button className="dashboard-button">+</button>
                    <button className="dashboard-button-button">...</button>
                  </div>
                </div>
                {/* Render Card component */}
                <div className="flex-gap-10">
                  {item[index]?.value?.map((it, ind) => {
                    return (
                      <Card
                        id={it.id}
                        title={it.title}
                        tag={it.tag}
                        name={it.userId}
                        users={users}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

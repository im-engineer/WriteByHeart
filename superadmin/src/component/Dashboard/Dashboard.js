import React, { useState, useEffect } from "react";
import { totalWriters, totalactiveinactivewriters } from "../../service/authService";
import "./Dashboard.css";

function Dashboard() {
  const [show, setShow] = useState(" ");

  useEffect(() => {
    const count = async () => {
      const result = await totalWriters();
      const TotalWriters = result.data.totalWriters;
      setShow(TotalWriters);
    };
    count();
  });

  const[status, setStatus] = useState(" ");

  useEffect(() => {
    const writerStatus = async () => {
        const result = await totalactiveinactivewriters();
        setStatus(result)
    }
    writerStatus()
  })

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xl-3">
          <div class="card bg-c-blue order-card">
            <div class="card-block">
              <h6 class="m-b-20">Total Writers</h6>
              <h2 class="text-right">
                <i class="fa fa-users  f-left"></i>
                <span>{show}</span>
              </h2>
              <p class="m-b-0">
               Total<span class="f-right">{show} witers joined</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xl-3">
          <div class="card bg-c-green order-card">
            <div class="card-block">
              <h6 class="m-b-20">Active Writers</h6>
              <h2 class="text-right">
                <i class="fa fa-user-check f-left"></i>
                <span>{status.data.activeWritersCount}</span>
              </h2>
              <p class="m-b-0">
                Total<span class="f-right">{status.data.activeWritersCount}  writer active</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xl-3">
          <div class="card bg-c-yellow order-card">
            <div class="card-block">
              <h6 class="m-b-20">Inactive writer</h6>
              <h2 class="text-right">
                <i class="fa fa-users-slash f-left"></i>
                <span>{status.data.inactiveWritersCount}</span>
              </h2>
              <p class="m-b-0">
                Total <span class="f-right">{status.data.inactiveWritersCount} are not active</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xl-3">
          <div class="card bg-c-pink order-card">
            <div class="card-block">
              <h6 class="m-b-20">Orders Received</h6>
              <h2 class="text-right">
                <i class="fa fa-credit-card f-left"></i>
                <span>486</span>
              </h2>
              <p class="m-b-0">
                Completed Orders<span class="f-right">351</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

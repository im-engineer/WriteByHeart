import React, { useState, useEffect } from "react";
import {
  totalWriters,
  totalactiveinactivewriters,
} from "../../service/authService";
import "./Dashboard.css";

function Dashboard() {
  const [show, setShow] = useState("");

  useEffect(() => {
    const count = async () => {
      try {
        const result = await totalWriters();
        const TotalWriters = result.data.totalWriters;
        setShow(TotalWriters);
      } catch (error) {
        // Handle error
        console.log(`error : ${error}`);
      }
    };
    count();
  }, []); // Add an empty dependency array to trigger the effect only on mount

  const [status, setStatus] = useState([]);

  useEffect(() => {
    const writerStatus = async () => {
      const result = await totalactiveinactivewriters();
      const allStatus = result.data;
      console.log(
        "🚀 ~ file: Dashboard.js:31 ~ writerStatus ~ allStatus:",
        allStatus
      );
      setStatus(allStatus);
    };
    writerStatus();
  }, []); // Add an empty dependency array to trigger the effect only on mount
console.log(status)
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xl-3">
          <div class="card bg-c-blue order-card">
            <div class="card-block">
              <h6 class="m-b-20">Total Writers</h6>
              <h2 class="text-right">
                <i class="fa fa-users f-left"></i>
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
                <span>{status.activeWritersCount}</span>
              </h2>
              <p class="m-b-0">
                <span class="f-right">{status.activeWritersCount} writer active</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-xl-3">
          <div class="card bg-c-yellow order-card">
            <div class="card-block">
              <h6 class="m-b-20">Inactive Writer</h6>
              <h2 class="text-right">
                <i class="fa fa-user-slash f-left"></i>
                <span>{status.inactiveWritersCount}</span>
              </h2>
              <p class="m-b-0">
                <span class="f-right">{status.inactiveWritersCount} writer not active</span>
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

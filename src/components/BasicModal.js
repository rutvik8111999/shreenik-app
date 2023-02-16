import React, { useState } from "react";
import "./BasicModal.css";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle } from "@material-ui/core";

const AddCustomer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="addCustomerBtn">
        <button className="modal-button" onClick={handleClickOpen}>
          {/* <BiUserPlus size={30} style={{ marginRight: "10px" }} /> */}
          Meet Us
        </button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <DialogTitle style={{ fontWeight: "700", fontSize: "25px" }}>
              <section id="modallength-form">
                <div className="modal-container">
                  <h1 className="l-heading">
                    <span className="text-primary">Contact</span> Us
                  </h1>
                  <p>Please fill out the below form to contact us</p>
                  <form action="process.php">
                    <div className="modal-group">
                      <label for="name">NAME</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        // placeholder="Name"
                      />
                    </div>
                    <div className="modal-group">
                      <label for="email">E-MAIL</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        // placeholder="EMAIL"
                      />
                    </div>
                    <div className="modal-group">
                      <label for="message">MESSAGE</label>
                      <textarea
                        name="message"
                        id="message"
                        // placeholder="MESSAGE"
                      ></textarea>
                    </div>
                    <button type="submit" className="modal-btn">
                      SUBMIT
                    </button>
                  </form>
                </div>
              </section>
            </DialogTitle>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AddCustomer;

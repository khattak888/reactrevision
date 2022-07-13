import React from "react";
import { useState } from "react";
import data from "./Data";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

const Product = () => {
  const [products, setProducts] = useState(data);
  const [model, setModel] = useState(false);
  // forms handling state
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState(null);
  const [img, setImg] = useState(null);
  const [editId, setEditId] = useState(null);

  const onDeleteHandler = (id) => {
    const filteredProducts = products.filter((item) => item.id !== id);
    setProducts(filteredProducts);
  };
  const onSubmithandler = (e) => {
    e.preventDefault();
    if (!(title && price && description && category && img)) {
      alert("ALL VALUES ARE REQUIRED");
      return;
    }

    let newProduct = {
      id: Math.round(Math.random() * 123536),
      title: title,
      price: price,
      description: description,
      category: category,
      image: img,
    };
    setProducts([newProduct, ...products]);
    setModel(false);
  };
  const onEditHandler = (item) => {
    // console.log(item);
    setCategory(item.category);
    setPrice(item.price);
    setDescription(item.description);
    setImg(item.img);
    setTitle(item.title);
    setEditId(item.id);
    setModel(true);
  };
  return (
    <>
      <div style={{ padding: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>List Of Products</h1>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => setModel(true)}
              >
                Add products
              </button>
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td style={{ width: "20px" }}>{item.title}</td>
                <td>
                  <span class="badge bg-info">{item.category}</span>
                </td>
                <td style={{ width: "20px" }}>{item.description}</td>
                <td>
                  <span class="badge bg-secondary">{item.price}</span>
                </td>
                <td>
                  <img style={{ width: 50 }} src={item.image} alt="asdf" />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger mx-1"
                    onClick={() => onDeleteHandler(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning mx-1"
                    onChange={() => onEditHandler(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </table>

        <Modal
          isOpen={model}
          onAfterOpen={() => null}
          onRequestClose={() => setModel(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="row">
            <div className="col-md-10">
              <h4>Add New Products</h4>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setModel(false)}
              ></button>
            </div>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Category:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Image:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Image URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          <button
            style={{ margin: 30 }}
            type="button"
            className="btn btn-info my-1"
            onClick={onSubmithandler}
          >
            Submit
          </button>
        </Modal>
      </div>
    </>
  );
};

export default Product;

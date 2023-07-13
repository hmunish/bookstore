const AddBook = () => (
  <section className="add-book">
    <h3>Add Book</h3>
    <form>
      <input type="text" />
      <select>
        <option value="Action">Action</option>
        <option value="Science Ficition">Science Fiction</option>
      </select>
      <input type="submit" placeholder="Submit" />
    </form>
  </section>
);

export default AddBook;

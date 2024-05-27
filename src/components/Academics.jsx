const Academics = () => {
  return (
    <div className="">
    <h1>Academics</h1>
      <table>
        <th>
          <td className="w-14">School</td>
          <td className="w-14">Year</td>
          <td className="w-14">Board</td>
          <td className="w-14">Marks(%)</td>
        </th>
        <tbody>
        <tr className="p-x-5">
            <td>St.Xavier's School</td>
            <td>2016</td>
            <td>Higher Secondary</td>
            <td>88.33</td>
        </tr>
        <tr>
            <td>St.Xavier's School</td>
            <td>2014</td>
            <td>Secondary</td>
            <td>88.83</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Academics;

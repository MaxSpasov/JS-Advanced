function createTable(data) {
  let students = JSON.parse(data);

  let headings = Object.keys(students[0]);
  let headingsHTML = '<tr>';
  headings.forEach(heading => {
    headingsHTML += `<th>${escapeHTML(heading)}</th>`;
  });
  headingsHTML += '</tr>';

  let entriesHTML = '';
  students.forEach(student => {
    entriesHTML += '<tr>';
    headings.forEach(heading => {
      entriesHTML += `<td>${escapeHTML(student[heading])}</td>`;
    });
    entriesHTML += '</tr>';
  });

  return `
    <table>
      ${headingsHTML}
      ${entriesHTML}
    </table>
  `;

  function escapeHTML(text) {
    return text.toString().replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
  
  let input = '[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]';
  console.log(createTable(input));
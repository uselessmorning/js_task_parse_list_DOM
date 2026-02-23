'use strict';

// write code here

const toNum = (str) => Number(String(str || '').replace(/[$,]/g, ''));

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = toNum(a.dataset.salary);
    const salaryB = toNum(b.dataset.salary);

    const validA = Number.isFinite(salaryA) ? salaryA : 0;
    const validB = Number.isFinite(salaryB) ? salaryB : 0;

    return validB - validA;
  });

  list.append(...items);
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: toNum(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);

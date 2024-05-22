function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createPartition(parent, color) {
  const partition = document.createElement("div");
  partition.className = "partition resizable";
  partition.style.backgroundColor = color;
  partition.style.flex = "1";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const vButton = document.createElement("button");
  vButton.innerText = "V";
  vButton.addEventListener("click", () => splitPartition(partition, "V"));

  const hButton = document.createElement("button");
  hButton.innerText = "H";
  hButton.addEventListener("click", () => splitPartition(partition, "H"));

  buttonContainer.appendChild(vButton);
  buttonContainer.appendChild(hButton);

  partition.appendChild(buttonContainer);
  parent.appendChild(partition);
}

function splitPartition(partition, direction) {
  const newColor = getRandomColor();
  const isVertical = direction === "V";

  const newPartition = document.createElement("div");
  newPartition.className = "partition resizable";
  newPartition.style.backgroundColor = newColor;
  newPartition.style.flex = "1";

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const vButton = document.createElement("button");
  vButton.innerText = "V";
  vButton.addEventListener("click", () => splitPartition(newPartition, "V"));

  const hButton = document.createElement("button");
  hButton.innerText = "H";
  hButton.addEventListener("click", () => splitPartition(newPartition, "H"));

  const removeButton = document.createElement("button");
  removeButton.innerText = "-";
  removeButton.addEventListener("click", (e) => {
    let parentNodeDiv = e.target.parentNode.parentNode.parentNode;
    if (parentNodeDiv.childNodes.length == 2) {
      parentNodeDiv.removeChild(newPartition);
    } else {
      parentNodeDiv.parentNode.removeChild(parentNodeDiv);
    }
  });

  buttonContainer.appendChild(vButton);
  buttonContainer.appendChild(hButton);
  buttonContainer.appendChild(removeButton);

  newPartition.appendChild(buttonContainer);

  if (isVertical) {
    partition.className += " partition-vertical";
    partition.style.flex = "1";
  } else {
    partition.className += " partition-horizontal";
    partition.style.flex = "1";
  }

  const originalParent = document.createElement("div");
  originalParent.className = isVertical
    ? "partition partition-vertical"
    : "partition partition-horizontal";
  originalParent.style.flex = "1";

  partition.parentNode.insertBefore(originalParent, partition);
  originalParent.appendChild(partition);
  originalParent.appendChild(newPartition);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  createPartition(container, getRandomColor());
});

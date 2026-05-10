function studentUnlimitedMarks(name, ...marks) {
  const student = {
    name,
    marks,
  };

  return student;
}

console.log(studentUnlimitedMarks("Jatin Mishra", 76, 84, 98, 82, 58));
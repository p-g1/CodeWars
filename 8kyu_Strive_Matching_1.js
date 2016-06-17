function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (!candidate.minSalary || !job.maxSalary) {
    throw 'error';
    }
  else if ((candidate.minSalary - candidate.minSalary * 0.1) <= job.maxSalary) {
    return true;
    }
  else {
    return false;
  }
}

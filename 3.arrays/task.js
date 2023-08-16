function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length)
    {
        return false;
    }

    return arr1.every((value, index) => {
        return value === arr2[index];
    });
  
}

function getUsersNamesInAgeRange(users, gender) {
    let gender_result = users.filter(user => user.gender === gender);
    if (gender_result.length == 0)
    {
        return 0;
    }
    let age_result = gender_result.reduce((acc, user) => acc + user.age, 0);
    return age_result / gender_result.length;

  
}
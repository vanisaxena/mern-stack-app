import bcrypt from 'bcrypt'

// for hashing password

export const hashPassword  = async(password) => {
    try {
        const saltRounds = 10;
        const hashedPassword =await bcrypt.hash(password,saltRounds)
        return hashedPassword
    } catch(error){
        console.log(error)
    }
};

//for compling the password

export const comparePassword = async (password,hashedPassword)=>{
     return  bcrypt.compare(password,hashedPassword)
};
const args = process.argv.slice(2);
const filtered = args.filter(x => x > 0);

const timer = (Uinput) => {
  for (let item of Uinput){
    setTimeout(() => { process.stdout.write('\x07'); }, 1000 * item)
  }
};  

timer(filtered);
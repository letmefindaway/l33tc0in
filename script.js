function convertToLeet(text) {
    const leetDict = {
        a: '4', e: '3', l: '1', t: '7', o: '0', s: '$', g: '6', b: '8', i: '1', z: '2',
        'A': '4', 'E': '3', 'L': '1', 'T': '7', 'O': '0', 'S': '$', 'G': '6', 'B': '8', 'I': '1', 'Z': '2'
    };
    
    return text.split('').map(char => {
        return leetDict[char] || char;
    }).join('');
}

const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

convertBtn.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text) {
        outputText.textContent = convertToLeet(text);
    } else {
        outputText.textContent = "Please enter some text!";
    }
});

clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.textContent = '';
});

function copyContractAddress() {
    const contractAddress = document.getElementById('contractAddress');
    const range = document.createRange();
    range.selectNode(contractAddress);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    
    // Display 'Copied!' message
    const copiedMessage = document.getElementById('copiedMessage');
    copiedMessage.style.display = 'inline';
    setTimeout(() => {
        copiedMessage.style.display = 'none';
    }, 1500);
}

const catalog = {
    comic1: {
        title: 'Comic Title 1',
        description: 'Description for Comic Title 1',
        rating: 4.5,
        release: '2024-01-15',
    },
    comic2: {
        title: 'Comic Title 2',
        description: 'Description for Comic Title 2',
        rating: 4.0,
        release: '2024-02-20',
    },
    comic3: {
        title: 'Comic Title 3',
        description: 'Description for Comic Title 3',
        rating: 4.2,
        release: '2024-03-10'
    },
    comic4: {
        title: 'Comic Title 4',
        description: 'Description for Comic Title 4',
        rating: 4.7,
        release: '2024-04-05'
    },
    comic5: {
        title: 'Comic Title 5',
        description: 'Description for Comic Title 5',
        rating: 4.3,
        release: '2024-05-01'
    },
    comic6: {
        title: 'Comic Title 6',
        description: 'Description for Comic Title 6',
        rating: 4.1,
        release: '2024-06-01'
    },
    comic7: {
        title: 'Comic Title 7',
        description: 'Description for Comic Title 7',
        rating: 4.6,
        release: '2024-07-01'
    },
    comic8: {
        title: 'Comic Title 8',
        description: 'Description for Comic Title 8',
        rating: 4.4,
        release: '2024-08-01'
    },
    comic9: {
        title: 'Comic Title 9',
        description: 'Description for Comic Title 9',
        rating: 4.0,
        release: '2024-09-01'
    },
    comic10: {
        title: 'Comic Title 10',
        description: 'Description for Comic Title 10',
        rating: 4.5,
        release: '2024-10-01'
    },
    comic11: { 
        title: 'Comic Title 11',
        description: 'Description for Comic Title 11',
        rating: 4.2,
        release: '2024-11-01'
    },
    comic20: {
        title: 'Comic Title 20',
        description: 'Description for Comic Title 20',
        rating: 4.8,
        release: '2024-12-01'
    }
};

const productSelect = document.getElementById('product');

Object.values(catalog).forEach(comic => {
    const option = document.createElement('option');
    option.value = comic.title;
    option.textContent = comic.title;
    productSelect.appendChild(option);
});


function thankingPage() {
    const main = document.querySelector("main");
    main.innerHTML = `<h2>Thank you for your review!</h2>
    <p>Your feedback is valuable to us and helps us improve our content. We appreciate your time and effort in sharing your thoughts about the comic.</p>
    <p>Feel free to explore more comics on our website and share your reviews with us!</p>`;
}


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedProduct = productSelect.value;

    let submits = Number(localStorage.getItem("usr-revws")) || 0;
    submits++;

    localStorage.setItem("usr-revws", submits);

    thankingPage();

    alert(`Thank you for your review of ${selectedProduct}! You have submitted ${submits} reviews so far.`);
});
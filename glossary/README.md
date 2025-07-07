    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: var(--primary);
        color: var(--light);
        line-height: 1.6;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }
    
    header {
        text-align: center;
        padding: 30px 0;
        background: linear-gradient(135deg, var(--dark), var(--primary));
        border-bottom: 3px solid var(--secondary);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        color: var(--light);
    }
    
    header p {
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto;
        color: #bdc3c7;
    }
    
    .search-container {
        max-width: 600px;
        margin: 30px auto;
        position: relative;
    }
    
    .search-container input {
        width: 100%;
        padding: 15px 20px;
        border-radius: 50px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        color: white;
        font-size: 1.1rem;
        border: 2px solid var(--secondary);
    }
    
    .search-container input:focus {
        outline: none;
        box-shadow: 0 0 10px var(--secondary);
    }
    
    .search-container i {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--secondary);
        font-size: 1.2rem;
    }
    
    .filter-buttons {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px 0 30px;
    }
    
    .filter-btn {
        background: rgba(52, 152, 219, 0.2);
        border: 1px solid var(--secondary);
        color: var(--light);
        padding: 8px 20px;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .filter-btn:hover, .filter-btn.active {
        background: var(--secondary);
    }
    
    .terms-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
    }
    
    .term-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .term-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        border-color: var(--secondary);
    }
    
    .term-header {
        background: rgba(44, 62, 80, 0.8);
        padding: 20px;
        border-bottom: 2px solid var(--secondary);
    }
    
    .term-header h3 {
        font-size: 1.5rem;
        margin-bottom: 5px;
        color: var(--light);
    }
    
    .term-header .category {
        display: inline-block;
        background: var(--accent);
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.85rem;
    }
    
    .term-body {
        padding: 20px;
    }
    
    .term-body p {
        margin-bottom: 15px;
        font-size: 1.1rem;
    }
    
    .term-body .example {
        background: rgba(52, 152, 219, 0.1);
        padding: 15px;
        border-radius: 10px;
        border-left: 3px solid var(--secondary);
        margin-top: 15px;
        font-style: italic;
    }
    
    .quiz-section {
        background: rgba(26, 37, 47, 0.8);
        padding: 40px 20px;
        margin: 50px 0;
        border-radius: 15px;
        border: 1px solid var(--secondary);
        text-align: center;
    }
    
    .quiz-section h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: var(--light);
    }
    
    .quiz-container {
        max-width: 800px;
        margin: 0 auto;
        background: rgba(44, 62, 80, 0.7);
        padding: 30px;
        border-radius: 15px;
    }
    
    .quiz-question {
        font-size: 1.4rem;
        margin-bottom: 25px;
    }
    
    .quiz-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 15px;
        margin-bottom: 25px;
    }
    
    .quiz-option {
        background: rgba(52, 152, 219, 0.2);
        border: 1px solid var(--secondary);
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .quiz-option:hover {
        background: var(--secondary);
    }
    
    .quiz-result {
        font-size: 1.3rem;
        font-weight: bold;
        margin-top: 20px;
        min-height: 30px;
    }
    
    .result-correct {
        color: #2ecc71;
    }
    
    .result-incorrect {
        color: #e74c3c;
    }
    
    .btn {
        background: var(--secondary);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 50px;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-block;
        margin-top: 15px;
    }
    
    .btn:hover {
        background: #2980b9;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    footer {
        text-align: center;
        padding: 30px 0;
        margin-top: 50px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        color: #bdc3c7;
    }
    
    .share-buttons {
        margin-top: 20px;
    }
    
    .share-btn {
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary);
        color: white;
        line-height: 50px;
        text-align: center;
        margin: 0 10px;
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }
    
    .share-btn:hover {
        transform: translateY(-5px);
        background: #2980b9;
    }
    
    @media (max-width: 768px) {
        .terms-grid {
            grid-template-columns: 1fr;
        }
        
        header h1 {
            font-size: 2rem;
        }
        
        .quiz-options {
            grid-template-columns: 1fr;
        }
    }
</style>

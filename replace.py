import os

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_content = content
    # Specific replacements
    new_content = new_content.replace('info@fabutales.com', 'social@fabylearn.com')
    # Website might be fabutales.com, user said "websitemiz fabylearn.com olucak"
    new_content = new_content.replace('fabutales.com', 'fabylearn.com')
    
    # Replace the logo name
    new_content = new_content.replace('logo.png', 'logo_name.png')

    # General replacements (case-sensitive)
    new_content = new_content.replace('Fabu', 'Faby')
    new_content = new_content.replace('fabu', 'faby')
    new_content = new_content.replace('FABU', 'FABY')

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    directory = '/Users/yigitozdemir/Desktop/projeler/Masalla/masalai_web'
    for root, dirs, files in os.walk(directory):
        if '.git' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.endswith(('.html', '.js', '.css', '.json', '.txt', '.xml')):
                filepath = os.path.join(root, file)
                replace_in_file(filepath)

if __name__ == '__main__':
    main()

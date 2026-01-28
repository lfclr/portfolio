# Portfolio Claire Le Goff - Data Analyst

Portfolio professionnel présentant mon parcours de reconversion de Cheffe de Produit Marketing vers Data Analyst.

## 🎨 Caractéristiques

- **Design moderne et accessible** : Palette de couleurs optimisée pour les daltoniens
- **Responsive** : Adapté à tous les écrans (desktop, tablette, mobile)
- **Animations fluides** : Transitions et effets visuels au scroll
- **Performance** : Code optimisé et léger
- **SEO-friendly** : Structure sémantique HTML5

## 📁 Structure du projet

```
portfolio/
│
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # Interactions JavaScript
└── README.md           # Documentation
```

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un repository GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"New"** (nouveau dépôt)
3. Nommez votre repository : `portfolio` ou `votre-nom.github.io`
4. Laissez-le **public**
5. Cliquez sur **"Create repository"**

### Étape 2 : Uploader vos fichiers

**Option A - Via l'interface GitHub (plus simple)** :

1. Sur la page de votre nouveau repository, cliquez sur **"uploading an existing file"**
2. Glissez-déposez les 3 fichiers : `index.html`, `style.css`, `script.js`
3. Ajoutez un message de commit (ex: "Initial commit")
4. Cliquez sur **"Commit changes"**

**Option B - Via Git en ligne de commande** :

```bash
# Cloner votre repository
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Copier vos fichiers dans ce dossier, puis :
git add .
git commit -m "Initial commit - Portfolio website"
git push origin main
```

### Étape 3 : Activer GitHub Pages

1. Dans votre repository, allez dans **Settings** (Paramètres)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Source", sélectionnez la branche **main** et le dossier **/ (root)**
4. Cliquez sur **Save**
5. Attendez quelques minutes ⏱️

Votre site sera accessible à : `https://votre-username.github.io/portfolio/`

*(Si vous avez nommé votre repo `votre-username.github.io`, l'URL sera simplement `https://votre-username.github.io`)*

## ✏️ Personnalisation

### Informations à mettre à jour dans `index.html` :

1. **Email** : Remplacez `votre.email@example.com` par votre vrai email (3 occurrences)
2. **GitHub** : Remplacez `https://github.com/votrecompte` par votre URL GitHub (3 occurrences)
3. **Localisation** : Adaptez la section localisation si nécessaire

### Sections à personnaliser selon votre profil LinkedIn :

- **Parcours professionnel** : Ajustez les dates, entreprises et descriptions dans la section timeline
- **Réalisations** : Personnalisez les projets avec vos propres réalisations
- **Compétences** : Ajoutez ou retirez des compétences selon votre niveau
- **Formations** : Complétez avec votre parcours académique réel

### Modifier les couleurs (dans `style.css`) :

Les couleurs principales sont définies dans les variables CSS au début du fichier :

```css
:root {
    --color-primary: #0077B6;     /* Bleu principal */
    --color-secondary: #F77F00;   /* Orange secondaire */
    --color-accent: #D62828;      /* Rouge accent */
    --color-success: #06A77D;     /* Vert succès */
    --color-purple: #6A4C93;      /* Violet */
}
```

## 🎯 Conseils d'utilisation

### Pour vos candidatures :

1. **Partagez l'URL** de votre portfolio sur votre CV et LinkedIn
2. **Personnalisez** la page avant chaque envoi important
3. **Mettez à jour régulièrement** vos projets et compétences
4. **Testez** sur différents appareils avant de partager

### Bonnes pratiques :

- ✅ Gardez vos informations à jour
- ✅ Ajoutez de vrais projets avec liens GitHub
- ✅ Utilisez des métriques concrètes dans vos réalisations
- ✅ Ajoutez votre photo si vous le souhaitez
- ✅ Vérifiez régulièrement que tous les liens fonctionnent

## 📊 Optimisations possibles

### Ajout d'images :

Pour ajouter votre photo ou des visuels de projets :

```html
<!-- Dans le HTML -->
<img src="images/photo-profil.jpg" alt="Claire Le Goff">
```

Créez un dossier `images/` dans votre repository et uploadez vos images.

### Analytics :

Pour suivre les visites, ajoutez Google Analytics :

1. Créez un compte sur [Google Analytics](https://analytics.google.com)
2. Ajoutez le code de tracking avant la balise `</head>` dans `index.html`

### Domaine personnalisé :

Si vous achetez un nom de domaine (ex: `claire-legoff.com`) :

1. Configurez les DNS chez votre registrar
2. Dans Settings > Pages, ajoutez votre domaine personnalisé
3. Suivez les instructions de GitHub

## 🔧 Dépannage

**Le site ne s'affiche pas ?**
- Vérifiez que GitHub Pages est bien activé dans Settings > Pages
- Attendez 5-10 minutes après l'activation
- Vérifiez que le fichier s'appelle bien `index.html` (en minuscules)

**Les styles ne s'appliquent pas ?**
- Vérifiez que `style.css` et `script.js` sont bien dans le même dossier que `index.html`
- Videz le cache de votre navigateur (Ctrl+F5)

**Le site est cassé sur mobile ?**
- Le design est responsive, mais testez sur différents appareils
- Utilisez les outils de développement Chrome (F12) pour tester

## 📞 Support

Si vous rencontrez des difficultés :
- Consultez la [documentation GitHub Pages](https://docs.github.com/pages)
- Vérifiez les [issues GitHub](https://github.com/) de projets similaires

## 🎓 Ressources utiles

- [Markdown Guide](https://www.markdownguide.org/) - Pour personnaliser ce README
- [GitHub Pages](https://pages.github.com/) - Documentation officielle
- [Can I Use](https://caniuse.com/) - Compatibilité des fonctionnalités web
- [WebAIM](https://webaim.org/resources/contrastchecker/) - Vérifier le contraste des couleurs

---

**Fait avec ❤️ pour votre reconversion en Data Analytics**

Bonne chance dans votre recherche d'alternance ! 🚀

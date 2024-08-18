[//]: # "Sürüm 0.1"

# Projeye Katkıda Bulunma

Proje **TypeScript** ve **Next.js** ile yazılmıştır. Stil için **Tailwind CSS** kullanır. Linting ve formatlama için **ESLint** ve **Prettier** kullanır. Paket yönetimi için **pnpm** kullanır.

## Başlarken

Projeye başlamak için [README.md](../README.md) dosyasındaki adımları takip edebilirsiniz.

### Gereksinimler

- [Node.js](https://nodejs.org/en/) - Node.js®, Chrome'un V8 JavaScript motoru üzerine kurulmuş bir JavaScript çalışma zamanı.
- [pnpm](https://pnpm.js.org/) - Hızlı, disk alanı verimli paket yöneticisi.
- [git](https://git-scm.com/) - Git, küçükten çok büyük projelere kadar her şeyi hız ve verimlilikle yönetmek için tasarlanmış ücretsiz ve açık kaynaklı dağıtılmış bir versiyon kontrol sistemidir.
- [Visual Studio Code (Opsiyonel)](https://code.visualstudio.com/) - Visual Studio Code, modern web ve bulut uygulamaları oluşturmak ve hata ayıklamak için yeniden tanımlanmış ve optimize edilmiş bir kod editörüdür.

### Kurulum

```bash
git clone https://github.com/gelecekbilimde/gelecek-bilimde-frontend.git
cd gelecek-bilimde-frontend 
pnpm i
```

### Çalıştırma

```bash
pnpm dev
```

### Katkıda Bulunma Kılavuzu

Editör olarak **Visual Studio Code** kullanmanız önerilir. **TypeScript**, **ESLint** ve **Prettier** için uzantı desteği vardır. Proje için önerilen uzantıları yüklemek için **Ctrl+Shift+P** tuşlarına basıp **Extensions: Show Recommended Extensions** yazabilirsiniz.

> **Prettier** uzantısı isteğe bağlıdır çünkü **lint-staged** ve **husky** ile zaten entegre edilmiştir. Kod, commit etmeden önce otomatik olarak formatlanacaktır.

## Commit Mesajı Yapısı

Commit mesajları [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) spesifikasyonuna uygun olmalıdır.

`<type>: <subject>`

### Tür

Aşağıdakilerden biri olmalıdır:

* **build**: Derleme sistemi veya dış bağımlılıkları etkileyen değişiklikler (örnek kapsamlar: gulp, broccoli, npm)
* **ci**: CI yapılandırma dosyaları ve betiklerdeki değişiklikler (örnek kapsamlar: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Sadece dokümantasyon değişiklikleri
* **feat**: Yeni bir özellik
* **fix**: Bir hata düzeltmesi
* **perf**: Performansı artıran bir kod değişikliği
* **refactor**: Ne bir hata düzeltmesi ne de bir özellik ekleyen bir kod değişikliği
* **style**: Kodun anlamını etkilemeyen değişiklikler (boşluk, formatlama, eksik noktalı virgüller, vb.)
* **test**: Eksik testlerin eklenmesi veya mevcut testlerin düzeltilmesi
* **chore**: Derleme süreci veya yardımcı araçlar ve kütüphaneler gibi değişiklikler (örneğin dokümantasyon oluşturma)

### Konu
Konu, değişikliğin kısa bir açıklamasını içerir:

- İngilizce yazın.
- Emir kipinde, geniş zaman kullanın: "change" değil "changed" veya "changes" değil
- İlk harfi büyük harf yapmayın
- Sonunda nokta (.) kullanmayın
- Gereksiz detaylar eklemeyin.

### Örnekler

```
feat: add signup page
```

```
fix: fix signup page
```

```
docs: update README.md
```

## Dal Adı Yönergeleri

`<type>/<subject-name>`

### Tür

Aşağıdakilerden biri olmalıdır:

- **feature**: Yeni bir özellik ekleme, bir özelliğin yeniden düzenlenmesi veya bir özelliğin kaldırılması
- **bugfix**: Bir hata düzeltmesi
- **hotfix**: Üretimdeki bir hatanın acil bir düzeltmesi (genellikle kritik bir hatanın hızlı bir düzeltmesi)
- **test**: Yeni özellikler veya teknolojilerle deney yapma

### Konu
Konu, değişikliğin kısa bir açıklamasını içerir:

- kebab-case kullanın
- İngilizce yazın.
- Emir kipinde, geniş zaman kullanın: "change" değil "changed" veya "changes" değil
- İlk harfi büyük harf yapmayın
- Sonunda nokta (.) kullanmayın
- Gereksiz detaylar eklemeyin.

### Örnekler

```
feature/signup-page
```

```
bugfix/header-navigation
```

```
test/roblox-authentication
```

## Klasör Yapısı

Klasör yapısı, dosyaları rotalara ve özelliklere göre bölerek organize edilir. Bu strateji, uygulamanın kök dizininde paylaşılan uygulama kodunu depolar ve uygulamanın daha spesifik kodunu, bunları kullanan rota segmentlerine böler.

Next.js, klasör yapısını organize etmede yardımcı olur. Detaylar için [Next.js Belgelerine](https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-features) bakabilirsiniz.

```
.
├── app                         // Kök uygulama dizini
│   ├── (layout)                // Layout dizini
│   │   |───_components
│   │   |   ├── header-link.tsx
│   │   |   └── footer-button.tsx
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── signup                  // Rota dizini
|   |   ├── _assets             // Resimler, ikonlar, vb.
│   │   │   ├── signup-logo.svg
│   │   │   └── signup.png
│   │   ├── _components         // Sayfada kullanılan bileşenler
│   │   │   ├── signup-button.tsx
│   │   │   └── signup-form.tsx
│   │   ├── _types              // Sayfada kullanılan türler
│   │   │   └── signup-form.d.ts
│   │   └── page.tsx
│   │── layout.tsx
│   └── page.tss
├── components                  // Bileşenler dizini
│   ├── button.tsx
│   └── form.tsx
├── context                     // Bağlam dizini
│   ├── auth-provider.tsx
│   └── theme-provider.tsx
└── hooks                       // Hook dizini
    ├── use-auth.tsx
    └── use-theme.tsx
```

## Kod Stili

### Değişkenler

| Tür | Vaka | Örnek |
| --- | --- | --- |
| **Dosya** | `kebab-case` | `button.tsx` |
| **Klasör** | `kebab-case` | `components` |
| **React Bileşeni** | `PascalCase` | `Button` |
| **Tür** | `PascalCase` | `User` |
| **Hook** | `useCamelCase` | `useTheme` |
| **Fonksiyon** | `camelCase` | `getUsers` |
| **Değişken** | `camelCase` | `userName` |
| **Özellik** | `camelCase` | `user.name` |
| **Sabit** | `UPPER_CASE` | `API_URL` |
| **CSS Sınıfı** | `kebab-case` | `.button-primary` |
| **CSS Değişkeni** | `--kebab-case` | `--color-primary` |


Il flusso corretto in team è proprio questo:

---

### 1️⃣ `git pull`

```bash
git pull origin master
```

* Prende tutte le modifiche dal repository remoto e le unisce con il tuo branch locale.
* Se ci sono conflitti in file già modificati da te o dai tuoi colleghi, Git ti avviserà.

---

### 2️⃣ Risolvi eventuali conflitti (merge)

* Apri i file con conflitti, cerca i marcatori:

```
<<<<<<< HEAD
(tue modifiche)
=======
(modifiche remote)
>>>>>>> master
```

* Decidi cosa tenere o combina le modifiche, poi salva i file.

---

### 3️⃣ Segna i conflitti come risolti

```bash
git add .
```

---

### 4️⃣ Completa il merge (se necessario)

Se Git non crea automaticamente il commit di merge:

```bash
git commit
```

---

### 5️⃣ `git push`

```bash
git push origin master
```

* Ora tutte le modifiche locali, incluse quelle dei tuoi colleghi integrate tramite merge, saranno sul repository remoto.

---

💡 **Suggerimento extra**:
Se vuoi mantenere una cronologia più pulita (senza commit di merge automatici), puoi usare:

```bash
git pull --rebase origin master
```

In questo modo le tue modifiche vengono “riapplicate” sopra quelle remote, evitando merge commit automatici.


TUTORIAL PER MODIFICARE

prima fai pull del progetto, poi merge


Tutorial rapido per modificare testo e immagini
1️⃣ Apri i file

Tutti i contenuti si trovano nei file .html (es. index.html, opere-2023.html, opere-2024.html…)

Consiglio: aprire i file con Visual Studio Code, Notepad++ o anche il semplice Blocco Note.

2️⃣ Modificare il testo

Cerca il paragrafo o il titolo che vuoi cambiare.

I titoli sono tra <h1>…</h1> o <h2>…</h2>

I testi normali sono tra <p>…</p>
Esempio:

<h3>Tramonto Infinito</h3>
<p>
Un’esplorazione del colore e della luce che si fondono in un orizzonte senza fine.
</p>


Modifica solo ciò che sta tra le tag <h3> e <p>, lasciando il resto così com’è.

3️⃣ Cambiare immagini

Le immagini sono tra <img src="URL" alt="descrizione">

Per cambiare un’immagine:

<img src="https://www.travel365.it/foto/persistenza-della-memoria.jpg" alt="Opera 1 - Paolo Carboni">


Basta sostituire l’URL con quello della nuova immagine.

Non toccare alt="" se non vuoi: serve per l’accessibilità e Google.

4️⃣ Salvare le modifiche

Dopo aver cambiato testo o immagini, salva il file.

5️⃣ Vedere le modifiche

Apri il file .html con un browser (Chrome, Edge, Firefox).

Controlla che testo e immagini siano corrette.

6️⃣ Caricare le modifiche su GitHub (opzionale)

Se tu o un’altra persona gestisce Git, lui può solo modificare localmente e salvare.

Poi tu puoi fare git add . → git commit -m "Aggiornamento contenuti" → git push.

💡 Suggerimento

Non modificare le parti con <div class="overlay">, <section> o <script>.

Lui deve solo modificare titoli, testi e link delle immagini.

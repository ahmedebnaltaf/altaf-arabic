# ALTAF ARABIC V3 — Audio QA Report

## Verified in the build package
- 91 core MP3 files: present and valid
- 244 Conversation Lab MP3 files: present and valid
- 335 MP3 files total
- 0 missing files in the audio manifests
- 0 invalid MP3 files detected by ffprobe

## Critical bug found
The previous Vocabulary buttons were incorrectly mapped to `U{unit}_D1_S{vocabulary_index}.mp3`. This caused a vocabulary click to play a sentence recording, and Unit 1 vocabulary items 7–8 pointed to files that do not exist.

## Fix in V3
- Vocabulary cards no longer play sentence MP3s.
- A vocabulary button is enabled only when a dedicated word MP3 is explicitly mapped in `data/vocab-audio.js`.
- No invented or mismatched audio is used.
- Dialogue buttons use exact verified mappings where the displayed Arabic text matches an audio transcript. Where no exact match exists, the button is disabled instead of playing the wrong file.
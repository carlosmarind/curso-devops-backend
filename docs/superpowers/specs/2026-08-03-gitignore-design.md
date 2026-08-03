# Diseño del archivo `.gitignore`

## Objetivo

Evitar que Git rastree dependencias, artefactos de compilación y pruebas,
configuración local, secretos, registros y archivos temporales del backend
NestJS/TypeScript.

## Reglas

- Ignorar dependencias instaladas en `node_modules/`.
- Ignorar salidas generadas en `dist/` y `coverage/`.
- Ignorar registros, archivos temporales y cachés habituales de Node, npm,
  ESLint y TypeScript.
- Ignorar archivos de entorno `.env*`, pero permitir que se versione
  `.env.example` como plantilla sin secretos.
- Ignorar configuraciones locales de Visual Studio Code, IntelliJ IDEA y
  archivos propios del sistema operativo.
- Mantener versionado `package-lock.json` para conservar instalaciones
  reproducibles.

## Verificación

Después de crear `.gitignore`, comprobar con `git check-ignore` que
`node_modules/`, `dist/`, `coverage/`, los archivos `.env` y las carpetas de
IDE queden ignorados, y que `package-lock.json` y `.env.example` no queden
ignorados.

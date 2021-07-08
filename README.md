# Cat Facts Proxy
Minimalistic Express proxy for cat facts APIs to avoid CORS

## API
### GET /random-fact
Output:

```json
{
  "fact": "The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip."
}
```

## How to run with Docker
```bash
docker-compose run app npm install
docker-compose up app       # Hosted on http://localhost:8000 by default
```

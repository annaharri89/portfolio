interface ALTCHAChallenge {
  algorithm: string
  challenge: string
  salt: string
  signature: string
  maxnumber: number
}

interface ALTCHASolution {
  algorithm: string
  challenge: string
  salt: string
  signature: string
  number: number
}

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function solveALTCHAChallenge(
  challenge: ALTCHAChallenge,
  difficulty = 4
): Promise<string> {
  const requiredPrefix = '0'.repeat(difficulty)
  const maxAttempts = challenge.maxnumber || 1000000

  for (let number = 0; number < maxAttempts; number++) {
    const hashInput = `${challenge.challenge}${challenge.salt}${number}`
    const hash = await sha256(hashInput)

    if (hash.startsWith(requiredPrefix)) {
      const solution: ALTCHASolution = {
        algorithm: challenge.algorithm,
        challenge: challenge.challenge,
        salt: challenge.salt,
        signature: challenge.signature,
        number,
      }
      return JSON.stringify(solution)
    }
  }

  throw new Error('Failed to solve ALTCHA challenge within max attempts')
}

export async function fetchALTCHAChallenge(
  apiBaseUrl: string
): Promise<ALTCHAChallenge> {
  const response = await fetch(`${apiBaseUrl}/api/altcha/challenge`)
  if (!response.ok) {
    throw new Error('Failed to fetch ALTCHA challenge')
  }
  return response.json()
}

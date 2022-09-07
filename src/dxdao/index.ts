const noWorkerPropsaolLabel = undefined

/**
 * Mapping for address => label.
 * Verify these labels using DXdao Gnosis chain base
 */
const workerAddressLabel: Record<string, string | undefined> = {
  '0x91628ddc3a6ff9b48a2f34fc315d243eb07a9501': 'CaneyFork.eth',
  '0x8e900cf9bd655e34bb610f0ef365d8d476fd7337': 'dLabs.eth',
  '0x3346987e123ffb154229f1950981d46e9f5c90de': 'Milton',
  '0xb0e83c2d71a991017e0116d58c5765abc57384af': noWorkerPropsaolLabel, // no worker proposal
  '0x81a94868572ea6e430f9a72ed6c4afb8b5003fdf': 'Corkos /Gero / Thomas',
  '0xe16d3664b313bd5fb8d911b467047e3cb4ed853d': 'Level K /John',
  '0x08f8c46f9f71e301ba41f59c253c412f1a129dad': noWorkerPropsaolLabel,
  '0xd97672177e0673227fa102c91bfa8b8cfa825141': 'Nathan',
  '0x7958ba4a50498faf40476d613d886f683c464bec': 'Dino Crescimbeni',
  '0xc36cbdd85791a718cefca21045e773856a89c197': 'Melanie Davis',
  '0xf50a3cfd68a00009623e1767eb696c4cc9347a7d': noWorkerPropsaolLabel,
  '0x5a3992044a131c2f633394065c13ba1b33cdffd9': noWorkerPropsaolLabel,
  '0x9ca367224770b496fe009403da7b93a543df3c45': noWorkerPropsaolLabel,
  '0x05b0b6ef681c9413d0e457f08aba8354b8bf482a': noWorkerPropsaolLabel,
  '0xfcd81c0d8fcdba864cc558c17af8ef83d05bdf45': noWorkerPropsaolLabel,
  '0xc4a69fbf4511a1377161834cb7a3b8766953db02': noWorkerPropsaolLabel,
  '0x7a129f63747876ae82db1d5587a7ef23bac8de8d': 'VanGrim',
  '0x95a223299319022a842d0dfe4851c145a2f615b9': 'Madusha',
  '0x0b17cf48420400e1d71f8231d4a8e43b3566bb5b': 'Ross Neilson',
  '0xf322fe674862649ed7f6abd747b71f27ebf88fdb': 'Jorge Lopes',
  '0x617512fa7d3fd26bda51b9ac8c23b04a48d625f1': 'Etherlabs',
  '0x26358e62c2eded350e311bfde51588b8383a9315': 'Violet',
}

/**
 * Returns address label, associated with a worker proposal. If there is no worker proposal, returns undefined.
 * @param address
 */
export function getAddressLabel(address: string) {
  return workerAddressLabel[address.toLowerCase()]
}

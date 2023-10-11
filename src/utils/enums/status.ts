export enum Status {
  Draft = '0',
  ToBeChecked = '1',
  Created = '2',

  Request = '2R',

  Waiting = '2W',

  Expected = '3',

  Reported = '4',

  Booked = '5',

  WaitingForApproval = '6',

  Reserved = '7',

  Confirmed = '8',

  Arriving = '9',

  Arrived = 'A',

  Active = 'ACT',

  ActiveConnector = 'Active',

  Ongoing = 'B',

  NotCleared = 'C',

  Delivered = 'D',

  Periodical = 'E',

  Finished = 'F',

  Departed = 'H',

  Collected = 'H1',

  Inactive = 'IACT',

  InactiveConnector = 'InActive',

  Incomplete = 'J',

  Invoicing = 'K',

  Invoiced = 'L',

  Approved = 'M',

  PartlyCredited = 'N',

  Credited = 'Q',

  Rejected = 'R',

  BlackListed = 'S',

  Bankrupt = 'S1',

  TransferPending = 'T1',

  TransferFailed = 'T2',

  Transferred = 'T3',

  Resent = 'T4',

  DoNotSend = 'T5',

  NotInUse = 'U',

  Historic = 'X',

  Cancelled = 'Y',

  Deleted = 'Z',
}
